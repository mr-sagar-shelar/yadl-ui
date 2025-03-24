import type { Meta, StoryObj } from "@storybook/react";
import Themeisle36 from "../Themeisle36";

const meta: Meta<typeof Themeisle36> = { title: "Themeisle/Themeisle36", component: Themeisle36 };

export default meta;
type Story = StoryObj<typeof Themeisle36>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
