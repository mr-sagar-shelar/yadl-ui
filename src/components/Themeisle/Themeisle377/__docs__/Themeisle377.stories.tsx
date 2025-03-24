import type { Meta, StoryObj } from "@storybook/react";
import Themeisle377 from "../Themeisle377";

const meta: Meta<typeof Themeisle377> = { title: "Themeisle/Themeisle377", component: Themeisle377 };

export default meta;
type Story = StoryObj<typeof Themeisle377>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
