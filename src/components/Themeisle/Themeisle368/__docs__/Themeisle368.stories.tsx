import type { Meta, StoryObj } from "@storybook/react";
import Themeisle368 from "../Themeisle368";

const meta: Meta<typeof Themeisle368> = { title: "Themeisle/Themeisle368", component: Themeisle368 };

export default meta;
type Story = StoryObj<typeof Themeisle368>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
