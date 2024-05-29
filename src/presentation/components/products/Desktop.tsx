import Cards from "@/presentation/components/products/Cards";
import MenuFilters from "./MenuFilters";


interface DesktopProps {
  isActiveCollapsible: boolean;
  setIsActiveCollapsible: (valor: boolean) => void;
}

const Desktop = ({isActiveCollapsible, setIsActiveCollapsible}: DesktopProps) => {
  return (
    <section className={`flex justify-between items-start p-4 font-inter mb-10 bg-[#FFF5E9] min-h-screen relative`}>

      <article className={`fixed w-full`}>
        <MenuFilters  isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible}/>   
      </article>

      <article className={`${isActiveCollapsible ? "w-[150px]" : "w-[430px]"} overflow-hidden duration-700 p-[20px] rounded-[20px] opacity-0`}>
        <div>hidden</div>
      </article>

      <article className="w-[90%] text-center">
        <div className="bg-white h-[68px] flex items-center justify-center rounded-[20px] shadow-sm">
          <h2 className="text-[30px] font-medium text-[#3F3D56] text-left w-full px-6">
            Mascotas/
          </h2>
        </div>

        <Cards />
      </article>
      
    </section>
  )
}

export default Desktop
