import type { Meta, StoryObj } from "@storybook/react";
import Themeisle466 from "../Themeisle466";

const meta: Meta<typeof Themeisle466> = { title: "Themeisle/Themeisle466", component: Themeisle466 };

export default meta;
type Story = StoryObj<typeof Themeisle466>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
