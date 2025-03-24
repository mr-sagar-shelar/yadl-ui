import type { Meta, StoryObj } from "@storybook/react";
import Themeisle204 from "../Themeisle204";

const meta: Meta<typeof Themeisle204> = { title: "Themeisle/Themeisle204", component: Themeisle204 };

export default meta;
type Story = StoryObj<typeof Themeisle204>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
