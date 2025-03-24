import type { Meta, StoryObj } from "@storybook/react";
import Themeisle80 from "../Themeisle80";

const meta: Meta<typeof Themeisle80> = { title: "Themeisle/Themeisle80", component: Themeisle80 };

export default meta;
type Story = StoryObj<typeof Themeisle80>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
