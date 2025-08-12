import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const Terminal = ({ className }: TerminalProps) => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialCommands: CommandHistory[] = [
      {
        command: "",
        output: (
          <>
            <div className="text-green-400">
              Hey there! I'm Alexandro Valdez, I'm glad you're here. Welcome to my portfolio!
            </div>
            <div className="text-gray-400 mb-2">
              Type <span className="text-yellow-400">help</span> to see available commands.
            </div>
          </>
        ),
      },
    ];
    setHistory(initialCommands);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const processCommand = (cmd: string): React.ReactNode => {
    const commandLowerCase = cmd.trim().toLowerCase();

    if (commandLowerCase === "" || !commandLowerCase) {
      return <></>;
    }

    if (commandLowerCase === "help") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">Available Commands:</div>
          <div><span className="text-purple-400">about</span> - Display information about me</div>
          <div><span className="text-purple-400">skills</span> - List my technical skills</div>
          <div><span className="text-purple-400">certs</span> - View my certifications</div>
          <div><span className="text-purple-400">work</span> - View my work experience</div>
          <div><span className="text-purple-400">contact</span> - Show contact information</div>
          <div><span className="text-purple-400">clear</span> - Clear the terminal</div>
        </div>
      );
    }

    if (commandLowerCase === "about") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">About Me:</div>
          <p>Ex-bootcamp instructor, ex-fullstack dev, now thriving in DevOps.</p>
          <p>I love creating bulletproof solutions to complex problems and I'm always eager to learn new technologies.</p>
        </div>
      );
    }

    if (commandLowerCase === "skills") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">My Skills:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <div className="text-blue-400 font-bold">DevOps:</div>
              <ul className="list-disc pl-6">
                <li>Amazon Web Services (AWS)</li>
                <li>Infrastructure as Code (Terraform & LocalStack)</li>
                <li>CI/CD Pipelines (GitHub Actions)</li>
                <li>Docker (Containerization)</li>
                <li>Git & GitHub (Version Control)</li>
                <li>Python, Go & Bash (Automation & Scripting)</li>
              </ul>
            </div>
            <div>
              <div className="text-blue-400 font-bold">Frontend:</div>
              <ul className="list-disc pl-6">
                <li>React / TypeScript</li>
                <li>HTML / CSS / JavaScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <div className="text-blue-400 font-bold">Backend:</div>
              <ul className="list-disc pl-6">
                <li>Node.js / Express</li>
                <li>RESTful APIs</li>
                <li> MongoDB (NoSQL)</li>
              </ul>
            </div>
            <div>
  <div className="text-blue-400 font-bold">Collaboration & Soft Skills:</div>
  <ul className="list-disc pl-6">
    <li>Jira, Agile & Confluence (Project Management)</li>
    <li>Team Leadership & Mentorship</li> 
  </ul>
</div>

          </div>
        </div>
      );
    }

    if (commandLowerCase === "certs") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">My Certifications:</div>
          <div className="mb-2">
            <div className="text-blue-400 font-bold">AWS SAA-C03 (Apr 2025 - Apr 2028)</div>
            <p>- AWS Solutions Architect - Associate</p>
          </div>
          <div className="mb-2">
            <div className="text-blue-400 font-bold">AWS AIF-C01 (Oct 2024 - Oct 2027)</div>
            <p>- AWS Certified AI Practitioner</p>
          </div>
          <div>
            <div className="text-blue-400 font-bold">AWS CLF-C02 (Dec 2023 - Apr 2028)</div>
            <p>- AWS Certified Cloud Practitioner</p>
          </div>
        </div>
      );
    }

    if (commandLowerCase === "work") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">Work Experience:</div>
          <div className="mb-2">
            <div className="text-blue-400 font-bold">DevOps Engineer (Dec 2024 - Present)</div>
            <p className="text-purple-400">Law Firm</p>
            <p>• Automated secure AWS infrastructure deployment with CI/CD pipelines and network-level security controls</p>
          </div>
          <div className="mb-2">
            <div className="text-blue-400 font-bold">Software Developer (Dec 2023 - Dec 2024)</div>
            <p className="text-purple-400">Law Firm</p>
            <p>• Built scalable APIs and full-stack applications using AWS Lambda, React, and modern JavaScript frameworks</p>
          </div>
          <div>
            <div className="text-blue-400 font-bold">FullStack Dev Instructor (Jul 2023 - Nov 2023)</div>
            <p className="text-purple-400">DevMountain</p>
            <p>• Mentored developers in full-stack technologies including React, Express, and PostgreSQL</p>
          </div>
          <div>
            <div className="text-blue-400 font-bold">FullStack Dev Instructor (Jan 2023 - Jul 2023)</div>
            <p className="text-purple-400">Mimo</p>
            <p>• Led JavaScript curriculum and code quality instruction for multiple development cohorts</p>
          </div>
        </div>
      );
    }

    if (commandLowerCase === "contact") {
      return (
        <div className="pl-4">
          <div className="text-yellow-400 font-bold mb-1">Contact Information:</div>
          <div><span className="text-blue-400">Email:</span> alexandrovaldez.official@gmail.com</div>
          <div><span className="text-blue-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/alexandro-valdez/" target="_blank" className="underline">linkedin.com/in/alexandro-valdez</a></div>
          <div><span className="text-blue-400">GitHub:</span> <a href="https://github.com/alexandroivaldez" target="_blank" className="underline">github.com/alexandroivaldez</a></div>
        </div>
      );
    }

    if (commandLowerCase === "clear") {
      // Clear will be handled separately
      return <></>;
    }

    return (
      <div className="text-red-400">
        Command not found: {cmd}. Type <span className="text-yellow-400">help</span> to see available commands.
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    // Handle clear command separately
    if (trimmedInput.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = processCommand(trimmedInput);

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedInput,
        output,
      },
    ]);

    setInput("");
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-[#1e1e1e] text-green-500 font-mono rounded-lg overflow-hidden shadow-xl border border-gray-700",
        className
      )}
      onClick={focusInput}
    >
      <div className="bg-gray-800 p-2 flex items-center border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-center flex-grow text-white text-sm">
          alexandroivaldez/portfolio ~ bash
        </div>
      </div>

      <div
        ref={terminalRef}
        className="flex-grow p-4 overflow-y-auto h-[70vh]"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.command && (
              <div className="flex">
                <span className="text-blue-400">visitor@portfolio:~$</span>
                <span className="ml-2">{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}

        <div className="flex">
          <span className="text-blue-400">visitor@portfolio:~$</span>
          <form onSubmit={handleSubmit} className="flex-grow ml-2 flex">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              className="bg-transparent outline-none flex-grow text-green"
              autoFocus
            />
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▌</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;