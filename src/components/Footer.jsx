import { Link } from "react-router";
import logoBig from "../assets/logoBig.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-text py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center">
        {/* Colonna 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-accent">HypeReact</h2>
          <img src={logoBig} className="w-30 hidden lg:block" alt="Logo HypeReact" />
        </div>

        {/* Colonna 2 - Link utili */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-accent">Link utili</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-200"
              >
                Riguardo noi
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Assistenza
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Servizi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>

        {/* Colonna 3 - Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-accent">Seguimi su:</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/leonardo-notaristefanodeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7.98h5V24H0zm7.98-16.02h4.78v2.16h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.33c0-1.75-.03-4-2.45-4-2.45 0-2.82 1.91-2.82 3.88V24h-5V7.98z" />
              </svg>
            </a>
            <a
              href="https://github.com/leonardonotaristefano-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.01c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="mt-10 border-t border-tertiary pt-6 text-center text-sm text-gray-400">
        Notaristefano Leonardo - Full Stack Developer Junior <br /> © {new Date().getFullYear()} HypeReact. Tutti i diritti sono riservati.
      </div>
    </footer>
  );
}
