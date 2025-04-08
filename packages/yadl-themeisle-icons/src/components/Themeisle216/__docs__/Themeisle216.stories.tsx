import type { Meta, StoryObj } from "@storybook/react";
import Themeisle216 from "../Themeisle216";

const meta: Meta<typeof Themeisle216> = { title: "Themeisle/Themeisle216", component: Themeisle216 };

export default meta;
type Story = StoryObj<typeof Themeisle216>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
