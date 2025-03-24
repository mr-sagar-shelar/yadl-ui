import type { Meta, StoryObj } from "@storybook/react";
import Themeisle463 from "../Themeisle463";

const meta: Meta<typeof Themeisle463> = { title: "Themeisle/Themeisle463", component: Themeisle463 };

export default meta;
type Story = StoryObj<typeof Themeisle463>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
