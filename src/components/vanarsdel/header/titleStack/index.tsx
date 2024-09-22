import TitleRenderer from './titleRenderer';

function TitleStack() {
  return (
    <div className="h-full w-1/2 flex items-center">
      <div className="pr-4">Logo</div>
      <ul className="h-full flex items-center">
        <TitleRenderer
          titles={[
            { title: 'home', tabId: 'home' },
            { title: 'timeline', tabId: 'timeline' },
          ]}
        />
      </ul>
    </div>
  );
}

export default TitleStack;
