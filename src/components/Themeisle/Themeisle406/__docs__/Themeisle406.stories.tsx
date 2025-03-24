import type { Meta, StoryObj } from "@storybook/react";
import Themeisle406 from "../Themeisle406";

const meta: Meta<typeof Themeisle406> = { title: "Themeisle/Themeisle406", component: Themeisle406 };

export default meta;
type Story = StoryObj<typeof Themeisle406>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
