import type { Meta, StoryObj } from "@storybook/react";
import Themeisle78 from "../Themeisle78";

const meta: Meta<typeof Themeisle78> = { title: "Themeisle/Themeisle78", component: Themeisle78 };

export default meta;
type Story = StoryObj<typeof Themeisle78>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
