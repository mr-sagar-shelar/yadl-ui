import type { Meta, StoryObj } from "@storybook/react";
import Themeisle280 from "../Themeisle280";

const meta: Meta<typeof Themeisle280> = { title: "Themeisle/Themeisle280", component: Themeisle280 };

export default meta;
type Story = StoryObj<typeof Themeisle280>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
