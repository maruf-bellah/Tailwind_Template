function SuspenseContent() {
  return (
    <div className='w-full h-screen flex align-middle justify-center text-gray-300 dark:text-gray-200 bg-base-100'>
      <div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
        <span class='sr-only'>Loading...</span>
        <div class='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div class='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div class='h-8 w-8 bg-primary rounded-full animate-bounce'></div>
      </div>{" "}
    </div>
  );
}

export default SuspenseContent;
