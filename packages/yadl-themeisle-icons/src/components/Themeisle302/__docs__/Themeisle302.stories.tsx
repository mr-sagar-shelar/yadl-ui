import type { Meta, StoryObj } from "@storybook/react";
import Themeisle302 from "../Themeisle302";

const meta: Meta<typeof Themeisle302> = { title: "Themeisle/Themeisle302", component: Themeisle302 };

export default meta;
type Story = StoryObj<typeof Themeisle302>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
