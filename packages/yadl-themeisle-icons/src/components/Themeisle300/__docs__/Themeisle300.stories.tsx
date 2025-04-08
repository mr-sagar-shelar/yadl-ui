import type { Meta, StoryObj } from "@storybook/react";
import Themeisle300 from "../Themeisle300";

const meta: Meta<typeof Themeisle300> = { title: "Themeisle/Themeisle300", component: Themeisle300 };

export default meta;
type Story = StoryObj<typeof Themeisle300>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
