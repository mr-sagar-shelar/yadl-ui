import type { Meta, StoryObj } from "@storybook/react";
import Themeisle162 from "../Themeisle162";

const meta: Meta<typeof Themeisle162> = { title: "Themeisle/Themeisle162", component: Themeisle162 };

export default meta;
type Story = StoryObj<typeof Themeisle162>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
