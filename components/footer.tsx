import LinkedIcon from "../icons/linkedin.svg";
import MastodonIcon from "../icons/mastodon.svg";
import GithubIcon from "../icons/github.svg";
import TwitterIcon from "../icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="border-t border-t-black mt-12 py-8 lg:py-16">
        <div className="flex flex-row justify-between items-center lg:flex-row">
          <div className="w-full">
            <a className="text-base lg:text-2xl leading-normal" href="/">
              Timmy O&apos;Mahony
            </a>
          </div>
          <ul className="flex gap-3 2xl:gap-4">
            <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
              <a
                href="https://www.linkedin.com/in/timmy-omahony/"
                title="Connect on LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIcon aria-label="LinkedIn icon" />
              </a>
            </li>
            <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
              <a
                href="https://mastodon.social/@timmyomahony/"
                title="Follow me on Mastodon"
                target="_blank"
                rel="noreferrer"
              >
                <MastodonIcon aria-label="Mastodon icon" />
              </a>
            </li>
            <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
              <a
                href="https://twitter.com/timmyomahony/"
                title="Follow me on Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon aria-label="Twitter icon" />
              </a>
            </li>
            <li className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
              <a
                href="https://github.com/timmyomahony"
                title="Check out my Github profile"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon aria-label="Github icon" />
              </a>
            </li>
          </ul>
        </div>
        <p className="w-full lg:w-1/2 mt-3 body-0 text-gray-500">
          Helping event & experiential marketing agencies pitch event tech &
          brand activations with confidence.
        </p>
        {process.env.NODE_ENV == "development" && (
          <div className="fixed bottom-0 left-0 bg-black type-0 p-1 text-white">
            <div className="sm:hidden">none</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
