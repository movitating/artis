function MenuButton() {
  return (
    <button
      type="button"
      className="self-center-center flex cursor-pointer flex-row items-center gap-3 text-sm after:content-['MENU']">
      <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 0.5H31M1 7.5H31"
          stroke="black"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}

export default MenuButton;
