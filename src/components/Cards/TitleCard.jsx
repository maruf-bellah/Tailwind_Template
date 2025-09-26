import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, topMargin, TopSideButtons }) {
  return (
    <div
      className={
        "rounded w-full p-6 bg-base-100 shadow " + (topMargin || "mt-0")
      }>
      {/* Title for Card */}
      <Subtitle>
        <div className='flex align-middle justify-between'>
          <div>{title}</div>

          {/* Top side button, show only if present */}
          <div>
            {TopSideButtons && (
              <div className='inline-block '>{TopSideButtons}</div>
            )}
          </div>
        </div>
      </Subtitle>

      <div className='divider mt-2'></div>

      {/** Card Body */}
      <div className='h-full w-full pb-6 bg-base-100'>{children}</div>
    </div>
  );
}

export default TitleCard;
