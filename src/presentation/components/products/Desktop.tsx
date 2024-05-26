import Cards from "@/presentation/components/products/Cards";
import MenuFilters from "./MenuFilters";


interface DesktopProps {
  isActiveAcordeonFilters: boolean;
  setIsActiveAcordeonFilters: (valor: boolean) => void;
}

const Desktop = ({isActiveAcordeonFilters, setIsActiveAcordeonFilters}: DesktopProps) => {
  return (
    <section className={`flex justify-between items-start p-4 font-inter mb-10 bg-[#FFF5E9] min-h-screen relative`}>

      <article className="fixed">
        <MenuFilters  isActiveAcordeonFilters={isActiveAcordeonFilters} setIsActiveAcordeonFilters={setIsActiveAcordeonFilters}/>   
      </article>

      <article className={`${isActiveAcordeonFilters ? "w-[100px]" : "w-[450px]"} duration-700 transition-all ease-in-out p-[20px] rounded-[20px] opacity-0 mr-8`}>
      </article>

      <article className="w-full text-center">
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
