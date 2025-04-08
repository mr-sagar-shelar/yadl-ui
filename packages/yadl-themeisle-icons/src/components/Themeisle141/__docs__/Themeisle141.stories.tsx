import type { Meta, StoryObj } from "@storybook/react";
import Themeisle141 from "../Themeisle141";

const meta: Meta<typeof Themeisle141> = { title: "Themeisle/Themeisle141", component: Themeisle141 };

export default meta;
type Story = StoryObj<typeof Themeisle141>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
