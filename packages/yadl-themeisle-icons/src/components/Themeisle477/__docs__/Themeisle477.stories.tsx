import type { Meta, StoryObj } from "@storybook/react";
import Themeisle477 from "../Themeisle477";

const meta: Meta<typeof Themeisle477> = { title: "Themeisle/Themeisle477", component: Themeisle477 };

export default meta;
type Story = StoryObj<typeof Themeisle477>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
