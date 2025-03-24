import type { Meta, StoryObj } from "@storybook/react";
import Themeisle169 from "../Themeisle169";

const meta: Meta<typeof Themeisle169> = { title: "Themeisle/Themeisle169", component: Themeisle169 };

export default meta;
type Story = StoryObj<typeof Themeisle169>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
