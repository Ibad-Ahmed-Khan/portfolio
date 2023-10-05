import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";

const PortfolioImg = () => {
  return (
    <SimpleGrid
      columns={{
        base: "1",
        md: "1",
        lg: "2",
      }}
      width="100%"
      placeItems="center"
      gap="10"
    >
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://neilpatel.com/wp-content/uploads/2023/06/Best_landing_pages3-700x397.jpg"
        />
      </Box>
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://i0.wp.com/www.exabytes.my/blog/wp-content/uploads/2022/12/landing-page-website-design.jpg"
        />
      </Box>
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://www.rankbyfocus.com/wp-content/uploads/2020/07/landing-page.jpg"
        />
      </Box>
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://contentmarketinginstitute.com/wp-content/uploads/2018/12/unbounce-landing-page-600x358.png"
        />
      </Box>
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://s3.envato.com/files/258963690/preview_large.__large_preview.__large_preview.png"
        />
      </Box>
      <Box>
        <Image
          borderRadius="10"
          w="xl"
          h="xl"
          src="https://www.mailerlite.com/img/containers/assets/features/landing-pages/landing-page-builder.jpg/984bf5e554f88c7559d25336f9b88a49.webp"
        />
      </Box>
    </SimpleGrid>
  );
};

export default PortfolioImg;
