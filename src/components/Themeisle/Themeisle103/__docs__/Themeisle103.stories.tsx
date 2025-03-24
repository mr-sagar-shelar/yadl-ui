import type { Meta, StoryObj } from "@storybook/react";
import Themeisle103 from "../Themeisle103";

const meta: Meta<typeof Themeisle103> = { title: "Themeisle/Themeisle103", component: Themeisle103 };

export default meta;
type Story = StoryObj<typeof Themeisle103>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
