import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, VStack, Heading, Text, Grid, GridItem, Image, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { extendTheme, SimpleGrid, Avatar } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Music, Settings, Moon } from 'lucide-react';
import { FaProductHunt } from 'react-icons/fa';
import TikTokPixel from './TikTokPixel';
import posthog from 'posthog-js';

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      500: '#319795',
      900: '#234E52',
    },
  },
});

const MotionBox = motion(Box);

const Header = () => {
  const handleChromeStoreClick = () => {
    posthog.capture('chrome_store_button_clicked', {
      buttonLocation: 'header'
    });
  };

  const handleProductHuntClick = () => {
    posthog.capture('product_hunt_button_clicked', {
      buttonLocation: 'header'
    });
  };

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      className='snap-start'
    >
      <Image
        src="/fullscreen.png"
        alt="DashDot Banner"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        padding="8"
      >
        <VStack align="flex-start" spacing={4} maxW="600px">
          <Image
            src="https://lh3.googleusercontent.com/-sjlUmVwhN4-Gx3DDeaGrm_lY7tKGOwHbsbehbDVx5HicwirkS5B48DSwyjeU2n4238dI6aBUl-kCOAh_qYe3VSLvA=s120"
            alt="DashDot Logo"
            width="100px"
            height="100px"
          />
          <Heading
            as="h1" // Change to h1 for SEO
            color="white" // Change color to white
            fontSize={['2xl', '3xl', '4xl']}
            fontWeight="black"
            letterSpacing="tight"
            lineHeight="1.1"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            Your all-in-one productivity sidekick.
          </Heading>
          <Flex justify="center" gap={4} mb={12}>
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf" isExternal onClick={handleChromeStoreClick}>
                <Image
                  src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png"
                  alt="Available in the Chrome Web Store"
                  height="55px"
                  borderRadius="xl"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="https://www.producthunt.com/posts/dashdot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dashdot" isExternal onClick={handleProductHuntClick}>
                <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=495306&theme=neutral" alt="DashDot on Product Hunt" height="55px" />
              </Link>
            </motion.div>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

const Feature = ({ icon, title, description, illustration }) => (
  <Flex
    p={6}
    borderRadius="lg"
    bg="gray.800"
    color="white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    alignItems="center"
    justifyContent="space-between"
  >
    <VStack align="start" spacing={4} maxW="70%">
      <Box color="teal.300">
        {icon}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text fontSize="lg" opacity={0.8}>{description}</Text>
    </VStack>
    <Box>
      <Image src={illustration} alt={`${title} illustration`} boxSize="150px" />
    </Box>
  </Flex>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Effortless To-Do List",
      description: "Organize tasks, set priorities, and track your progress with a simple and intuitive layout.",
      illustration: "/illu1.png"
    },
    {
      icon: <Clock size={32} />,
      title: "Pomodoro Timer",
      description: "Break your work into productive intervals with customizable timers, perfectly balanced for focus and rest.",
      illustration: "/illu2.png"
    },
    {
      icon: <Music size={32} />,
      title: "Ambient Sounds",
      description: "Create the perfect working atmosphere with a variety of ambient sounds, from rain to coffee shop vibes.",
      illustration: "/illu3.png"
    },
    {
      icon: <Settings size={32} />,
      title: "Customizable Settings",
      description: "Tailor your Pomodoro sessions, sound preferences, and reminders to fit your work style.",
      illustration: "/illu44.png"
    }
  ];

  const screenshots = [
    "https://lh3.googleusercontent.com/WWZ39oW-cIfTNcR2_j7io4dP3W3KfVcLYrHWjx9OHOP37-J0m51N7Z6ntAz-_2-6HjU2jT40U2QkfrhmzezE9wfzMA=s1280-w1280-h800",
    "https://lh3.googleusercontent.com/SF_2Q_BORzp4JVF_Kk0_6ZwUozRjYabJ5nFsdhP3joGpZcqDz1xBUQ8rZSlorRM4otDJTqRmsBH0Cq91ohmevp2uSw=s1280-w1280-h800",
    "https://lh3.googleusercontent.com/qvUpIOjwL_Itb-56c--hscbrqvXUqyZsi9KJZx_aoPkobd-YZpXPYK1LtBQAjbjn-CqlLbJqVPZjKr2bTd-ImODXmn4=s1280-w1280-h800",
    "https://lh3.googleusercontent.com/tD79bDgRKfecQOwGyKggcb-dlb2tbZ_xThQYHof4MQULRZvhyvrdAXEgD0howmHWxX44wAK7nvpZunjRZRMcmdu3ZQA=s1280-w1280-h800",
  ];

  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const featureRefs = useRef([]);
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = featureRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveScreenshot(index);
          }
        }
      });
    }, options);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        const sectionTop = featuresSection.offsetTop;
        const sectionBottom = sectionTop + featuresSection.offsetHeight;
        setShowHeader(scrollPosition < sectionBottom - window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="features-section"
      minH="100vh"
      bg="gray.900"
      py={20}
      px={8}
      className='snap-start'
      position="relative"
    >
      <VStack spacing={16} align="stretch">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: showHeader ? 'sticky' : 'relative',
            top: showHeader ? '20px' : 'auto',
            zIndex: 10,
          }}
        >
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            Supercharge Your Productivity
          </Heading>
          <Text
            fontSize="xl"
            textAlign="center"
            mt={4}
            color="gray.300"
          >
            DashDots powerful features help you stay focused and get more done
          </Text>
        </motion.div>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={8}
        >
          <GridItem>
            {isClient && (
              <Box
                position="sticky"
                top="120px"
                height="80vh"
                overflow="hidden"
              >
                <motion.div
                  key={activeScreenshot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <Image
                    src={screenshots[activeScreenshot]}
                    alt={`DashDot Screenshot ${activeScreenshot + 1}`}
                    objectFit="contain"
                    width="100%"
                    height="100%"
                  />
                </motion.div>
              </Box>
            )}
          </GridItem>
          <GridItem>
            <VStack spacing={8}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  minHeight="calc(100vh - 40px)"
                  display="flex"
                  alignItems="center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Feature {...feature} />
                  </motion.div>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

const Testimonial = ({ name, title, content, avatarSrc }) => (
  <MotionBox
    bg="gray.800"
    p={10} // Increased padding for more space
    borderRadius="2xl" // More rounded corners
    boxShadow="0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22)" // Cool drop shadow
    width="full" // Full width for larger cards
    height="auto" // Auto height to accommodate content
    initial={{ opacity: 0, y: 20, scale: 0.9 }} // Initial animation state
    animate={{ opacity: 1, y: 0, scale: 1 }} // Final animation state
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }} // Spring animation for a bouncy effect
    whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3), 0 8px 8px rgba(0, 0, 0, 0.22)" }} // Enhanced hover shadow
  >
    <Text fontSize="xl" mb={6} color="gray.300">
      &quot;{content}&quot;
    </Text>
    <Flex align="center">
      <Avatar src={avatarSrc} name={name} size="xl" mr={4} />
      <Box>
        <Text fontWeight="bold" fontSize="xl" color="white">
          {name}
        </Text>
        <Text fontSize="lg" color="gray.400">
          {title}
        </Text>
      </Box>
    </Flex>
  </MotionBox>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      title: "Software Developer",
      content: "DashDot has revolutionized my workflow. The combination of a to-do list and Pomodoro timer keeps me focused and productive throughout the day.",
      avatarSrc: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Johnson",
      title: "Freelance Writer",
      content: "I love how DashDot integrates seamlessly with my browser. The ambient sounds feature is a game-changer for maintaining focus during long writing sessions.",
      avatarSrc: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael Lee",
      title: "Student",
      content: "As a student, DashDot has been invaluable for managing my assignments and study sessions. The customizable Pomodoro timer fits perfectly with my study habits.",
      avatarSrc: "https://i.pravatar.cc/150?img=8"
    },
    {
      name: "Emily Rodriguez",
      title: "Project Manager",
      content: "DashDot's intuitive interface and powerful features have significantly improved my team's productivity. It's become an essential tool in our daily operations.",
      avatarSrc: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "David Kim",
      title: "Graphic Designer",
      content: "The clean design and functionality of DashDot align perfectly with my workflow. It helps me stay organized without being distracting.",
      avatarSrc: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Laura Thompson",
      title: "Marketing Specialist",
      content: "DashDot's all-in-one approach to task management and focus tools has streamlined my workday. I can't imagine working without it now.",
      avatarSrc: "https://i.pravatar.cc/150?img=6"
    }
  ];

  return (
    <Box minH="100vh" bg="gray.900" py={20} px={8} className='snap-start'>
      <VStack spacing={12} align="stretch" maxW="6xl" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600"
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        >
          Loved by thousands of users
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is DashDot, and how can it improve my workflow?",
      answer: "DashDot is a powerful Chrome extension designed to streamline your daily productivity tasks. It combines a to-do list, Pomodoro timer, and ambient sounds to help you focus and get more done. With just a single click, you can manage tasks, track your work sessions, and create the perfect working atmosphere."
    },
    {
      question: "How does DashDot work?",
      answer: "DashDot integrates seamlessly into your Chrome browser. You can create and manage tasks, start Pomodoro sessions, and play ambient sounds all from the extension popup. It syncs across devices, ensuring your productivity tools are always at your fingertips."
    },
    {
      question: "Can I customize the Pomodoro timer settings?",
      answer: "Yes, DashDot allows you to customize your Pomodoro timer settings. You can adjust work session length, short break duration, and long break intervals to suit your personal productivity style."
    },
    {
      question: "What kind of ambient sounds does DashDot offer?",
      answer: "DashDot provides a variety of ambient sounds to enhance focus, including white noise, rain, coffee shop ambience, and nature sounds. You can choose the sound that works best for your concentration needs."
    },
    {
      question: "Is my data synced across devices?",
      answer: "Yes, DashDot syncs your tasks and settings across all devices where you're signed in to Chrome, ensuring a seamless productivity experience whether you're working on your desktop or laptop."
    }
  ];

  return (
    <Box minH="100vh" bg="gray.900" py={20} px={8} className='snap-start'>
      <Heading
        as="h2"
        size="1xl"
        textAlign="center"
        className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600"
        textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        fontSize="3.45rem" // Increased by 15%
      >
        Frequently Asked Questions
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        gap={8}
        maxW="100%" // Ensure the Flex container does not exceed 100% width
        mx="auto" // Center the Flex container
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          width="100%"
          maxW="4xl"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={12} align="stretch" width="100%">
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem border="none" mb={4}>
                    <AccordionButton
                      bg="gray.800"
                      color="white"
                      _hover={{ bg: "gray.700" }}
                      borderRadius="md"
                      p={4}
                      fontSize="1.15rem" // Increased by 15%
                      width="100%" // Ensure consistent width
                    >
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                      pb={4}
                      bg="gray.800"
                      color="gray.300"
                      borderBottomRadius="md"
                      mt={2}
                      fontSize="1.15rem" // Increased by 15%
                    >
                      <Text>{faq.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                </MotionBox>
              ))}
            </Accordion>
          </VStack>
        </MotionBox>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            src="/faq.png"
            alt="Vector Illustration"
            maxW="100%"
            maxH="500px"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
};


const DashDotLanding = () => {
  return (
    <ChakraProvider theme={theme}>
      <TikTokPixel />
      <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')} className="font-sans h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        <Header />
        <FeaturesSection />
        <FAQSection />
        <TestimonialSection />
        <Box py={16} px={8} className='snap-start'>
          <VStack spacing={4} as="footer" mt={20}>
            <Text>© 2024 DashDot. All rights reserved.</Text>
            <Flex gap={4}>
              <Moon size={24} />
              <FaProductHunt size={24} />
            </Flex>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default DashDotLanding;