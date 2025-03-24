import type { Meta, StoryObj } from "@storybook/react";
import Themeisle231 from "../Themeisle231";

const meta: Meta<typeof Themeisle231> = { title: "Themeisle/Themeisle231", component: Themeisle231 };

export default meta;
type Story = StoryObj<typeof Themeisle231>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
