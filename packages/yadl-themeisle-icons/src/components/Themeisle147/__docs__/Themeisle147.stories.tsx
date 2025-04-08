import type { Meta, StoryObj } from "@storybook/react";
import Themeisle147 from "../Themeisle147";

const meta: Meta<typeof Themeisle147> = { title: "Themeisle/Themeisle147", component: Themeisle147 };

export default meta;
type Story = StoryObj<typeof Themeisle147>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
