import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {

  return (
    <footer className="bg-darkestbrown text-white rounded-t-xl pt-6 pb-4">
      <div className="container flex text-xl justify-between items-center">
          <div className="flex content-end text-xl">
              <FontAwesomeIcon icon={faCat} />
              <h4 className="ml-1">CatWiki</h4>
          </div>
          <p className="text-sm">created by <a href="http://laurahoffmeyer.com/">Laura Hoffmeyer</a> ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};