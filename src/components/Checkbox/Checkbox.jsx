const Checkbox = ({ label, checked, onClick }) => {
  return (
    <div
      className="d-flex align-items-center gap-2 user-select-none cursor-pointer"
      onClick={onClick}
    >
      <div>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {checked && (
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          <path
            d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>{label}</div>
    </div>
  );
};
export default Checkbox;
