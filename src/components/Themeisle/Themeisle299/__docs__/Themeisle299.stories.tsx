import type { Meta, StoryObj } from "@storybook/react";
import Themeisle299 from "../Themeisle299";

const meta: Meta<typeof Themeisle299> = { title: "Themeisle/Themeisle299", component: Themeisle299 };

export default meta;
type Story = StoryObj<typeof Themeisle299>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
