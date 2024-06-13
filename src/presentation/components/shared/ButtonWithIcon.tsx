import { cn } from '@/presentation/lib/utils';
import { Button } from '../ui/button';
import { VariantProps, cva } from 'class-variance-authority';

interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonWhitIconVariants> {
	children: React.ReactNode;
	className?: string;
	type: 'button' | 'submit' | 'reset';
}

const buttonWhitIconVariants = cva(
	'flex items-center gap-3 w-full py-[22px] rounded-xl font-bold text-base',
	{
		variants: {
			variant: {
				default: 'bg-[#EFEFEF] text-[#1E1E1E]',
			},
		},

		defaultVariants: {
			variant: 'default',
		},
	}
);

export function ButtonWithIcon({ children, className, type, variant }: Props) {
	return (
		<Button
			type={type}
			className={cn(buttonWhitIconVariants({ variant, className }))}>
			{children}
		</Button>
	);
}
