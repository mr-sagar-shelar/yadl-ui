import type { Meta, StoryObj } from "@storybook/react";
import Themeisle424 from "../Themeisle424";

const meta: Meta<typeof Themeisle424> = { title: "Themeisle/Themeisle424", component: Themeisle424 };

export default meta;
type Story = StoryObj<typeof Themeisle424>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
