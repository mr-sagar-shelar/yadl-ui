import type { Meta, StoryObj } from "@storybook/react";
import Themeisle112 from "../Themeisle112";

const meta: Meta<typeof Themeisle112> = { title: "Themeisle/Themeisle112", component: Themeisle112 };

export default meta;
type Story = StoryObj<typeof Themeisle112>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
