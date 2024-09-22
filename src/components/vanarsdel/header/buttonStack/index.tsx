import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';

function ButtonStack() {
  return (
    <div className="flex justify-center text-collapsable-label">
      <MdOutlineOpenInNew className="cursor-pointer mx-2" size={17} />
      <FiMoreHorizontal className="cursor-pointer" size={17} />
    </div>
  );
}

export default ButtonStack;
