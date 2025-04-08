import type { Meta, StoryObj } from "@storybook/react";
import Themeisle394 from "../Themeisle394";

const meta: Meta<typeof Themeisle394> = { title: "Themeisle/Themeisle394", component: Themeisle394 };

export default meta;
type Story = StoryObj<typeof Themeisle394>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
