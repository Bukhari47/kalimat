import { useState, useEffect, useRef } from "react";
import meetyourhost from "./assets/images/meetyourhost.png";
import twitter from "./assets/images/twitter.png";
import substack from "./assets/images/substack.png";
import linktree from "./assets/images/linktree.png";
import ourbrandstory from "./assets/images/brand.png";
import music from "./assets/images/music.webp";
import buymeacoffee from "./assets/images/buymeacoffee.png";
import mailboxbg from "./assets/images/mailboxbg.png";
import bg from "./assets/images/bg.png";
import shamazsandhu from "./assets/images/shamazsandhu.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [startX, setStartX] = useState(0);

  // Guests data
  const guests = [
    { name: "Ali Sethi", title: "Musician", episode: "S01 E01" },
    { name: "Fatima Bhutto", title: "Author", episode: "S01 E02" },
    { name: "Mohsin Hamid", title: "Novelist", episode: "S01 E03" },
    {
      name: "Shamaz Sandhu",
      title: "Co-founder & Executive Chef, Fuòco Restaurant",
      episode: "S02 E07",
    },
    { name: "Guest Name", title: "Title", episode: "S02 E08" },
    { name: "Guest Name", title: "Title", episode: "S02 E09" },
  ];

  // Splide.js slider references
  const guestsSplideRef = useRef(null);
  const testimonialsSplideRef = useRef(null);

  // Initialize Splide.js sliders with autoscroll
  useEffect(() => {
    if (!window.Splide) return;

    const sliders = [];

    // Initialize guests slider
    if (guestsSplideRef.current) {
      const guestsSplide = new window.Splide(guestsSplideRef.current, {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "2rem",
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: false,
        arrows: false,
        pagination: false,
        autoscroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
        breakpoints: {
          768: {
            perPage: 1,
          },
          1024: {
            perPage: 2,
          },
        },
      });

      guestsSplide.mount();
      sliders.push(guestsSplide);
    }

    // Initialize testimonials slider
    if (testimonialsSplideRef.current) {
      const testimonialsSplide = new window.Splide(
        testimonialsSplideRef.current,
        {
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          autoplay: true,
          interval: 4000, // Slightly slower than guests
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: false,
          arrows: false,
          pagination: false,
          autoscroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }
      );

      testimonialsSplide.mount();
      sliders.push(testimonialsSplide);
    }

    // Cleanup function
    return () => {
      sliders.forEach((slider) => slider.destroy());
    };
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-30 py-12 flex justify-between items-center border-header">
        <div className="text-2xl font-bold">Kalimat</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#listen"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("listen")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Listen
          </a>
          <a
            href="#guests"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("guests")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Guests
          </a>
          <a
            href="#testimonies"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("testimonies")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Testimonies
          </a>
          <a
            href="#newsletter"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("newsletter")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Newsletter
          </a>
          <a
            href="#about"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-6 py-20 max-w-4xl text-center"
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-6">
          <span className="text-white text-sm font-medium">
            The Learning Curve
          </span>
        </div>
        <h1 className="text-7xl font-instrument-sans font-light text-white mb-6 leading-tight">
          Immerse Yourself in{" "}
          <em className="italic font-instrument">Stories</em> Worth Listening to
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Bringing a fresh surge of inspiration, engaging personal stories, and
          thought-provoking conversations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#4A0404] hover:cursor-pointer hover:bg-white/80 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Latest Episodes →
          </button>
          <button className="bg-white/20 text-white hover:cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors">
            Previous Podcasts →
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Who Are We Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-20 max-w-4xl text-center"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white/60 to-transparent"></div>
        <h2 className="text-6xl font-light text-white font-instrument-sans mb-12">
          Who Are <em className="italic font-instrument">We?</em>
        </h2>
        <p className="text-xl text-white/90 leading-relaxed">
          Kalimat كلمات is an audio-based podcast series that explores the human
          experience through reflective interviews with remarkable self-leaders
          from all walks of life. Created and hosted by Shaharbano Khan, each
          episode offers personal insights into the shared Journey to Self,
          inviting listeners into a more thoughtful and conscious relationship
          with both themselves and the world around them.
        </p>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Meet Your Host Section */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <h2 className="text-6xl font-light text-white font-instrument-sans text-center mb-16">
          Meet Your <em className="italic font-instrument">Host</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="w-80 h-96 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/10">
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <img
                  src={meetyourhost}
                  alt="Host Photo"
                  className="w-full h-full object-cover"
                />
                {/* <span className="text-white/60 text-lg">Host Photo</span> */}
              </div>
            </div>
            <div className="flex gap-6 justify-center">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-sm">
                  <img src={twitter} alt="Twitter/X" className="w-4 h-4" />
                </span>
                <span>Twitter/X</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-sm">
                  <img src={substack} alt="Substack" className="w-4 h-4" />
                </span>
                <span>Substack</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-sm">
                  <img src={linktree} alt="Linktree" className="w-4 h-4" />
                </span>
                <span>Linktree</span>
              </a>
            </div>
          </div>

          <div className="text-white/80 space-y-6">
            <p className="leading-relaxed">
              Shaharbano Khan is a conservationist and social entrepreneur whose
              work centres on the quiet architecture of human experience. Raised
              between Riyadh and Kuala Lumpur, she developed an early
              sensitivity to cultural tone and the subtle formation of identity.
            </p>
            <p className="leading-relaxed">
              Her creative journey began with photography and design, where
              instinct found visual expression. This pursuit was later shaped by
              years of martial discipline, through which movement offered
              clarity and stillness became a mode of thought. Now based in
              Lahore and undertaking legal studies, she continues her inquiry
              through writing and social audio, working at the intersection of
              sociology, self-hood, and reflective observation.
            </p>
            <p className="leading-relaxed">
              In 2022, she founded Kalimat كلمات, a platform rooted in
              contemplation. What began as a personal practice has grown into a
              space for thoughtful dialogue, shaped by the conviction that how
              we come to understand ourselves holds greater meaning than any
              title we carry.
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Our Brand Story Section */}
      <section className="container mx-auto px-6 py-20 max-w-6xl text-center">
        <h2 className="text-6xl font-light text-white font-instrument-sans mb-8">
          Our Brand <em className="italic font-instrument">Story</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-center justify-center items-center">
          <div className="text-center">
            <div className="text-white/80 space-y-6 font-inter">
              <p className="leading-relaxed">
                <strong>Kalimat</strong> <span className="text-xl">كلمات</span>,
                meaning 'Words' in Arabic, encapsulates the essence of our
                podcast, examining self-discovery and the profound art of
                storytelling. Each episode is a journey, revealing remarkable
                paths that invite listeners to explore their own narratives
                within the universal 'Learning Curve'.
              </p>
              <p className="leading-relaxed">
                Our interviews are carefully woven with eloquence and insight,
                crafted into emotionally resonant stories. They open with the
                evocative question, "How is the weather in your heart?" — an
                invitation underscored by classical jazz, setting a tone of
                authentic emotional discovery.
              </p>
              <p className="leading-relaxed">
                Guided by a philosophy of inclusion and attentiveness, Kalimat
                كلمات embraces a spectrum of perspectives, amplifying both
                celebrated voices and overlooked narratives. By bridging diverse
                cultures, each account reveals essential realities about what
                connects us as humans.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={ourbrandstory}
              alt="Brand Story Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Our Achievements Section */}
      <section className="container mx-auto px-6 py-20 max-w-6xl text-center">
        <h2 className="text-6xl font-light text-white font-instrument-sans mb-4">
          Our <em className="italic font-instrument">Achievements</em>
        </h2>
        <p className="text-white/70 text-lg mb-16">
          You Create The Meaning. We Lead The Motion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left">
            <div className="text-white mb-4">
              <span className="text-7xl font-bold">85</span>
              <span className="text-5xl font-bold text-white/60">K+</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Total Plays
            </h3>
            <p className="text-white/60 text-sm">
              With a third season unfolding, each episode deepens the journey —
              from what we know to who we are.
            </p>
          </div>

          <div className="text-left">
            <div className="text-white mb-4">
              <span className="text-7xl font-bold">70</span>
              <span className="text-5xl font-bold text-white/60">K+</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Geographic Locations
            </h3>
            <p className="text-white/60 text-sm">
              With a third season unfolding, each episode deepens the journey —
              from what we know to who we are.
            </p>
          </div>

          <div className="text-left">
            <div className="text-white mb-4">
              <span className="text-7xl font-bold">5</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Generational Touchpoints
            </h3>
            <p className="text-white/60 text-sm">
              With a third season unfolding, each episode deepens the journey —
              from what we know to who we are.
            </p>
          </div>

          <div className="text-left">
            <div className="text-white mb-4">
              <span className="text-7xl font-bold">3</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Seasons, Many Chapters
            </h3>
            <p className="text-white/60 text-sm">
              With a third season unfolding, each episode deepens the journey —
              from what we know to who we are.
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* The Latest Episodes Section */}
      <section
        id="listen"
        className="bg-primary min-h-screen relative overflow-hidden font-inter px-6 py-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center mb-16">
            <h1 className="text-white text-6xl font-instrument-sans">
              The Latest{" "}
              <span className="font-instrument-italic">Episodes</span>
            </h1>
          </div>

          {/* Apple Music Style Player */}
          <div className="backdrop-blur-xl rounded-xl p-6 max-w-5xl mx-auto">
            <div className="flex bg-white rounded-xl overflow-hidden">
              {/* Left Column - 1/3 width */}
              <div className="w-1/3 bg-white p-6 flex flex-col">
                <div className="text-sm text-gray-500 mb-6">Music</div>

                {/* Album Art and Details */}
                <div className="flex-grow">
                  <div className="w-64 h-64 mx-auto mb-6">
                    <img
                      src={music}
                      alt="Album Cover"
                      className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-black mb-2">
                      The Slow Rush
                    </h3>
                    <p className="text-gray-500">Tame Impala</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="mt-auto">
                  <button className="bg-[#ff2d55] text-white px-8 py-3 rounded-md w-full font-medium hover:bg-[#ff1f4b] transition-colors">
                    Play
                  </button>
                </div>
              </div>

              {/* Right Column - 2/3 width */}
              <div className="w-2/3 bg-[#f1f1f3] flex flex-col">
                <div className="p-4 flex justify-end">
                  <button className="text-sm text-gray-500 hover:text-gray-200">
                    Sign In
                  </button>
                </div>

                {/* Track List */}
                <div className="flex-grow p-6">
                  <div className="space-y-2 h-[400px] overflow-y-auto">
                    {[
                      "One More Year",
                      "Instant Destiny",
                      "Borderline",
                      "Posthumous Forgiveness",
                      "Breathe Deeper",
                      "Tomorrow's Dust",
                      "On Track",
                      "Lost in Yesterday",
                      "Is It True",
                      "It Might Be Time",
                      "Glimmer",
                      "One More Hour",
                    ].map((track, index) => (
                      <div
                        key={index}
                        className="flex items-center py-2 px-3 rounded-md hover:underline group cursor-pointer"
                      >
                        <span className="text-gray-500 text-sm w-8">
                          {index + 1}
                        </span>
                        <span className="text-gray-500 text-sm font-medium">
                          {track}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Links */}
                <div className="p-4 flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-[#ff2d55] text-sm font-medium hover:text-gray-200 transition-colors"
                  >
                    View in Apple Music →
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 text-xs text-right hover:text-gray-200 transition-colors"
                  >
                    See how your data is managed...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Meet Our Remarkable Guests Section */}
      <section id="guests" className="container mx-auto px-6 py-20 max-w-6xl">
        <h2 className="text-6xl font-light text-white font-instrument-sans text-center mb-16">
          Meet Our <em className="italic font-instrument">Remarkable</em> Guests
        </h2>

        <div
          className="splide"
          ref={guestsSplideRef}
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="splide__track">
            <ul className="splide__list">
              {guests.map((guest, index) => (
                <li key={index} className="splide__slide">
                  <div className="text-center">
                    <div
                      className="w-full h-90 border border-white/20 rounded-2xl mb-4 flex items-end justify-center relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${shamazsandhu})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "multiply",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                        <div className="text-sm text-white/60 mb-2">
                          {guest.episode}
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-1">
                          {guest.name}
                        </h3>
                        <p className="text-white/70 text-sm">{guest.title}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* Support the Journey Section */}
      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2">
              <h1 className="text-white text-6xl font-instrument-sans mb-8">
                Support the{" "}
                <span className="font-instrument-italic font-instrument">
                  Journey
                </span>
              </h1>
              <p className="text-[#ffffff99] text-lg leading-relaxed mb-8">
                Made with care. Shared with purpose. Kalimat كلمات thrives
                through the generosity of listeners who believe in thoughtful
                dialogue. Your support keeps these episodes open to all.
              </p>
              <button className="bg-white text-primary hover:cursor-pointer hover:bg-white/80 mr-2 px-4 py-2 rounded-full mb-4 w-fit mx-auto">
                Buy Me A Coffee
              </button>
            </div>

            {/* Right Content - Buy Me a Coffee Image */}
            <div className="w-1/2 flex justify-end">
              <div className="w-[500px]">
                <img
                  src={buymeacoffee}
                  alt="Buy me a coffee interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-8">
        <div
          className="w-3/4 h-[1px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #fff3 60%, transparent)",
          }}
        />
      </div>

      {/* What People Are Saying Section */}
      <section
        id="testimonies"
        className="container mx-auto px-6 py-20 max-w-6xl"
      >
        <h2 className="text-6xl font-light text-white font-instrument-sans text-center mb-16">
          What <em className="italic font-instrument">People</em> Are Saying
        </h2>

        <div
          className="splide"
          ref={testimonialsSplideRef}
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="splide__track">
            <ul className="splide__list">
              {[
                {
                  text: "Kalimat has become my weekly ritual. Each episode feels like sitting with a wise friend who asks the right questions.",
                  author: "Sarah M., Listener",
                },
                {
                  text: "The conversations on Kalimat are unlike anything else in the podcast space. Deeply human and profoundly moving.",
                  author: "Ahmed K., Regular Listener",
                },
                {
                  text: "Shaharbano's ability to create safe spaces for vulnerability is remarkable. These stories have changed how I see myself.",
                  author: "Maria L., Subscriber",
                },
                {
                  text: "Kalimat is, to my mind, a rare tour de force. With its astutely curated narratives, it consistently transcends the ordinary, each episode unfolding as a masterclass in thought, intellect, and eloquence. The production, too, is exemplary: textured, deliberate, and sonically elegant. In an age of the transient and trivial, it is, without question, essential listening for those who cherish meaningful discourse.",
                  author: "A Foundational Mentor to Kalimat 🇬🇧",
                  country: "UK",
                },
              ].map((testimonial, index) => (
                <li key={index} className="splide__slide">
                  <div className="max-w-md p-6 bg-opacity-90 bg-[linear-gradient(180deg,#610202,#42194a00)] rounded-lg shadow-lg">
                    <p className="text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="mt-4 flex items-center text-[#ffffffb3]">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-2"></div>
                      <div>
                        <p className="text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-400">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Get Stories In Your Mailbox Section */}
      <section
        id="newsletter"
        className="bg-primary min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <div
          style={{
            backgroundImage: `url(${mailboxbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative w-full max-w-[1200px] mx-auto rounded-[32px] overflow-hidden bg-[#4A0404]/30 backdrop-blur-xl p-32"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff000008] to-transparent"></div>
          <div className="relative z-10">
            <h1 className="text-white text-7xl font-light mb-4">
              Get <span className="font-instrument-italic">Stories</span> In
              Your Mailbox
            </h1>
            <p className="text-[#ffffff80] text-lg mb-12">
              Stay ahead of the Learning Curve with exclusive episode
              <br />
              takeaways and reflections.
            </p>
            <div className="max-w-[500px] mx-auto">
              <div className="bg-[#E8E8E8] rounded-md flex overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 bg-transparent px-6 py-3 outline-none text-[#300101] placeholder-[#300101]/70 rounded-md"
                />
                <button className="bg-[#E5C3B9] text-[#300101] px-6 py-3 rounded-md font-medium text-sm">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* only border on top */}
      <footer
        id="contact"
        className="bg-primary py-20 px-6 border-t border-white/20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Kalimat</div>
              <div className="text-2xl text-white/80">كلمات</div>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Listen",
                  "Guests",
                  "Testimonies",
                  "Newsletter",
                  "About",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-6">Social</h3>
              <ul className="space-y-3">
                {[
                  "Twitter (X)",
                  "Instagram",
                  "LinkedIn",
                  "Linktree",
                  "Substack",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Get In Touch With Us
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                Guest suggestions, thoughtful feedback, or ideas for
                collaboration — we'd love to hear from you!
              </p>
              <button className="bg-[#E5C3B9] text-[#300101] px-6 py-3 rounded-full hover:bg-[#d5b3a9] transition-colors">
                Contact Now
              </button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm mb-2">
              © Copyrights 2025 Kalimat كلمات
            </p>
            <p className="text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Policies
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white transition-colors">
                Disclaimers
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
