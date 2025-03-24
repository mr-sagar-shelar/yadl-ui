import type { Meta, StoryObj } from "@storybook/react";
import Themeisle102 from "../Themeisle102";

const meta: Meta<typeof Themeisle102> = { title: "Themeisle/Themeisle102", component: Themeisle102 };

export default meta;
type Story = StoryObj<typeof Themeisle102>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
