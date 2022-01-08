import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'

export const TopBar = () => {

  return (
    <>
      <header className="flex content-end text-3xl mb-4 justify-center">
        <FontAwesomeIcon icon={faCat} />
        <h1 className="ml-1">CatWiki</h1>
      </header>
    </>
  );
};