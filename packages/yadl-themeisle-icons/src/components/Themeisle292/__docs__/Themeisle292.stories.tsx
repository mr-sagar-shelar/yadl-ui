import type { Meta, StoryObj } from "@storybook/react";
import Themeisle292 from "../Themeisle292";

const meta: Meta<typeof Themeisle292> = { title: "Themeisle/Themeisle292", component: Themeisle292 };

export default meta;
type Story = StoryObj<typeof Themeisle292>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
