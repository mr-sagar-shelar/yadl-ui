import type { Meta, StoryObj } from "@storybook/react";
import Themeisle359 from "../Themeisle359";

const meta: Meta<typeof Themeisle359> = { title: "Themeisle/Themeisle359", component: Themeisle359 };

export default meta;
type Story = StoryObj<typeof Themeisle359>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
