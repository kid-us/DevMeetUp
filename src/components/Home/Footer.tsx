import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 border-t border-secondary ">
      <div className="flex justify-between pt-4 w-full">
        <p className="text-sm text-color-secondary">
          © 2025 DevMeetup ET. All rights reserved.
        </p>
        <div className="flex space-x-5 text-end">
          <Link
            to={"/"}
            className="text-color-secondary text-lg hover:text-white bi-linkedin"
          ></Link>
          <Link
            to={"/"}
            className="text-color-secondary text-lg hover:text-white bi-github"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
