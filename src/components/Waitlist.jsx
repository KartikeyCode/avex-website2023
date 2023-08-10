import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch("YOUR_API_ENDPOINT", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, message }),
      // });
      // if (response.ok) {
      //   setIsRegistered(true);
      // }
      setIsRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* nav with logo in middle and back to home button at right */}
      <div className="flex items-center justify-center px-8 py-4 relative">
        <img className="h-8 mr-2" src="/images/Logo.png" alt="avex logo" />
        <Link to="/" className="absolute right-10">
          Back to home
        </Link>
      </div>
      <div className="h-screen">
        {/* form with name email and message */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center bg-black md:px-16 md:py-28 px-8 py-16 rounded-2xl md:min-w-[50%] md:min-h-[50%] min-w-full">
            {isRegistered ? (
              <>
                <p className="text-center text-white mb-4">
                  Thank you for registering!
                </p>
                <svg
                  width="164"
                  height="164"
                  viewBox="0 0 186 186"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="mb-4">
                  <rect width="186" height="186" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1">
                      <use
                        xlinkHref="#image0_5587_2343"
                        transform="scale(0.01)"
                      />
                    </pattern>
                    <image
                      id="image0_5587_2343"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO2d+4tVVRTHT28dgjB7kJUZQflzQT80M5FhSNoTiv6AwDLBkSjqP6gfKnoTDRX0QwSR0OMXy25wQCoIMzMjcjSzp6aNRqTE3E8s2IfO3GbunHvPfqyzz/7AwMCdOXP2/s7aj7XXWjvLEolEIpFIJBKJRCKRSCQGArgAWANsAl4AtgG7gCngKHASOAEcAvYCnwMfAC8CG4DrgXNTtw8JMALcDjxjOr6LHb4BngRWA2cmgfqLcCpwA/AacBz3/Am8AYwnYWYLsQh4ANhHOMQK7wfObvuw9BDwM3r4zfxznJG1CeBWYD96+Ra4GzglixlgBfAezeF94EILI8G4+VqcaQG4C5imeRySFd+QbR4Fvi89S0aFa+337mAvdRbwPM3npUGWymbF+Nccz9kfzFKApcAnxMM24JwK7V41jxgFY34UmP1Sy8xyMjZ2A8v7tHvc7HH6cZ1vMVYCPxAvPwJXDGEZmP3WIp9iXBq5GAXiR1s2oBjy+ajvOWMP7eErcVpWHKZEjBt9r6ZimsCrMgn8UUGMVd7EMILEsLQdlFz8X8CEGssobfpaKUb2Xx+8rUWMFQ3dgdehIy6Rnn5YAvwSdJgyL/IuLbaMMsA9wSzDvMAdtIt8oTMT4M1QYoz0OM5aN0zN0yeTQc5TgIdpD3kFyxgxvi5hQ4hjV00nfRos46PS7/wk+zKfgsgxZxvIB7SMMvf6jA4JGZCg2TLK7PFyBGycaLGT17AMv+cewKvETW5JDOEV12KMeApia+ow1cu00whJE94ZKx3LYhSscSmIxNrGSMeRGMJzLgWJ8Yw8tzhnzMUulykBtqLQ22AZBTNOUiFMfkZMdDyIUXCTC0EkWSYWcsfDVC+bXQgimUsx0PFoGQWTLgT5kObTCSCGsNWFIBLy0mRyz8OU25WWpXyOY8ZTfAlwOfAo8DfxWkbBry4EOUI9unPtWiXO1bE7Jg9oGQXHXQgiqcd1+LTPs8cqRP65tAz5OZf8o1GQtxZ4/phlUbSIIZxwIcjvNV9KEvpP8yRKR5EYwmGtk/ojFf7OWE1RtIkh7LMqhsVlb7dKRAbDT/RVJ3BXq6n5+NKqGJY3hjNVAgCoFuKv3TKcbgxtuk6qWspoRUvRahkFz1oVw5Fz0ZYouXIxhI1WxXDofq8rSt4AMYTVVsUwDTvf0QHVsHNKR/Gc0du+pVbF8HCEO6il5A2xDGGHVRF6Gvm0wxefqWgpVzfEMgqesCpCT0Nvc/zyM3VjYpWJIay1p8D/G7vYQ/pad9hwfkXDVMG087omEh7poSHdQUVRKIbwsjslZle5QZMo6BQDL/UcTTqClJXwwcxCc4rCOaPgO28V6UwtXEJbCnotQ1jvRYxSSpukbeHRUibK/3EmkvJjdHLQa0qb6ZAHAzT0M+Axk+l6GL1MeBWjNFxoriwair1e62H1iHJzsGbrZV0QMUqivBO6BxSxJagYRpDlFepFtYGjUk0v0wBwS4S5I4Mgbb8z00TE6W5VeCrThinxt532kau9i0SKDAM7aQ+71d/cA1zckrJNB/sVVFYFcBVwgHg5AFyZNQngIonYIz6+VrO8HRRTZHh7ZBP4kqzJAKcDjzd8n9I1y3qdq6kadVJkN9s0jsn1R1mMAJc1zPe1pbHzxRCuFs1V6aaCe219Y0KKNpu7ODTtLSaCnWcocrncZw52QgYkrI9q0rYBcI1ZzdTNZ6waxPa6uRc37vsKLQVRrBMvKvCFCXKoizxjh7mceG2rh6W6AOdJiSNJfJEKbeZq7p1m8j1iUrZPmu+nzGdbzc9uNFbgJiUgkUgkEolEIpFIJBKJRBYv/wJPC8F9kQcCEAAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-[#DF5AE1] to-[#465DD8] text-transparent bg-clip-text text-xl flex gap-2 mb-8">
                  {/* twitter svg */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.4344 10.5819C23.8295 10.8588 23.1775 11.0407 22.5019 11.1277C23.1932 10.7085 23.7274 10.0441 23.9788 9.2452C23.3267 9.64068 22.604 9.91751 21.842 10.0757C21.2214 9.39548 20.3494 9 19.3595 9C17.5134 9 16.0051 10.5186 16.0051 12.3932C16.0051 12.6621 16.0365 12.9232 16.0915 13.1684C13.2948 13.026 10.8045 11.6734 9.14695 9.62486C8.85629 10.1232 8.69131 10.7085 8.69131 11.3254C8.69131 12.504 9.2805 13.548 10.1918 14.1412C9.63401 14.1412 9.11553 13.983 8.65989 13.7458V13.7695C8.65989 15.4147 9.82255 16.791 11.3623 17.0994C10.8679 17.2356 10.349 17.2546 9.84612 17.1548C10.0595 17.8291 10.4774 18.4191 11.041 18.8419C11.6046 19.2646 12.2857 19.499 12.9885 19.5119C11.7972 20.4614 10.3206 20.9746 8.80129 20.9672C8.5342 20.9672 8.2671 20.9514 8 20.9198C9.49261 21.8847 11.268 22.4463 13.1691 22.4463C19.3595 22.4463 22.7611 17.2734 22.7611 12.7887C22.7611 12.6384 22.7611 12.496 22.7532 12.3458C23.4131 11.8712 23.9788 11.2701 24.4344 10.5819Z"
                      fill="url(#paint0_linear_4901_15440)"
                    />
                    <circle
                      cx="15.5"
                      cy="15.5"
                      r="15"
                      stroke="url(#paint1_linear_4901_15440)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4901_15440"
                        x1="16"
                        y1="0.5"
                        x2="16.5"
                        y2="30.5"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DF5AE1" />
                        <stop offset="1" stop-color="#465DD8" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4901_15440"
                        x1="15.5"
                        y1="0"
                        x2="15.5"
                        y2="31"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B95BDF" />
                        <stop offset="1" stop-color="#665DDA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Follow us on Twitter
                </a>

                <Link
                  to="/"
                  className="bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full px-1 py-1">
                  <div className="px-6 py-2 bg-white text-black rounded-full border-4 border-black">
                    Back to home
                  </div>
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-center text-white">
                  Avex is launching Soon!
                </h1>
                <p className="mt-4 text-center text-white">
                  We are currently in private beta. Sign up to be notified when
                  we launch.
                </p>
                <form
                  className="flex flex-col items-center justify-center mt-8 w-full text-white"
                  onSubmit={handleSubmit}>
                  <input
                    className="w-full md:max-w-[70%] bg-zinc-800 p-2 mb-4 outline-none pl-3 focus-visible:ring ring-purple-400 rounded-md"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full md:max-w-[70%] bg-zinc-800 p-2 mb-4 outline-none pl-3 focus-visible:ring ring-purple-400 rounded-md"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full md:max-w-[70%] bg-zinc-800 p-2 mb-8 outline-none pl-3 focus-visible:ring ring-purple-400 rounded-md"
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <a
                    href="http://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-b from-[#DF5AE1] to-[#465DD8] text-transparent bg-clip-text text-xl flex gap-2 mb-8">
                    {/* twitter svg */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.4344 10.5819C23.8295 10.8588 23.1775 11.0407 22.5019 11.1277C23.1932 10.7085 23.7274 10.0441 23.9788 9.2452C23.3267 9.64068 22.604 9.91751 21.842 10.0757C21.2214 9.39548 20.3494 9 19.3595 9C17.5134 9 16.0051 10.5186 16.0051 12.3932C16.0051 12.6621 16.0365 12.9232 16.0915 13.1684C13.2948 13.026 10.8045 11.6734 9.14695 9.62486C8.85629 10.1232 8.69131 10.7085 8.69131 11.3254C8.69131 12.504 9.2805 13.548 10.1918 14.1412C9.63401 14.1412 9.11553 13.983 8.65989 13.7458V13.7695C8.65989 15.4147 9.82255 16.791 11.3623 17.0994C10.8679 17.2356 10.349 17.2546 9.84612 17.1548C10.0595 17.8291 10.4774 18.4191 11.041 18.8419C11.6046 19.2646 12.2857 19.499 12.9885 19.5119C11.7972 20.4614 10.3206 20.9746 8.80129 20.9672C8.5342 20.9672 8.2671 20.9514 8 20.9198C9.49261 21.8847 11.268 22.4463 13.1691 22.4463C19.3595 22.4463 22.7611 17.2734 22.7611 12.7887C22.7611 12.6384 22.7611 12.496 22.7532 12.3458C23.4131 11.8712 23.9788 11.2701 24.4344 10.5819Z"
                        fill="url(#paint0_linear_4901_15440)"
                      />
                      <circle
                        cx="15.5"
                        cy="15.5"
                        r="15"
                        stroke="url(#paint1_linear_4901_15440)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4901_15440"
                          x1="16"
                          y1="0.5"
                          x2="16.5"
                          y2="30.5"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#DF5AE1" />
                          <stop offset="1" stop-color="#465DD8" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4901_15440"
                          x1="15.5"
                          y1="0"
                          x2="15.5"
                          y2="31"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#B95BDF" />
                          <stop offset="1" stop-color="#665DDA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Follow us on Twitter
                  </a>

                  <button className="bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full px-1 py-1">
                    <div className="px-6 py-2 bg-white text-black rounded-full border-4 border-black">
                      Join now
                    </div>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Waitlist };
