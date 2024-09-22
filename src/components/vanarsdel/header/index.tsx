import ButtonStack from './buttonStack';
import TitleStack from './titleStack';

function VanArsdelHeader() {
  return (
    <section className="h-13 flex justify-between items-center px-4 border-b-2 border-light-gray">
      <TitleStack />
      <ButtonStack />
    </section>
  );
}

export default VanArsdelHeader;
