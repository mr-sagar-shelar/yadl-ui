import type { Meta, StoryObj } from "@storybook/react";
import Themeisle304 from "../Themeisle304";

const meta: Meta<typeof Themeisle304> = { title: "Themeisle/Themeisle304", component: Themeisle304 };

export default meta;
type Story = StoryObj<typeof Themeisle304>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
