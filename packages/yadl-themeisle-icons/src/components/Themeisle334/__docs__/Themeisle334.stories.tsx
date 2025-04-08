import type { Meta, StoryObj } from "@storybook/react";
import Themeisle334 from "../Themeisle334";

const meta: Meta<typeof Themeisle334> = { title: "Themeisle/Themeisle334", component: Themeisle334 };

export default meta;
type Story = StoryObj<typeof Themeisle334>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
