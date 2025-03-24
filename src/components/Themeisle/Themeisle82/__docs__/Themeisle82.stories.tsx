import type { Meta, StoryObj } from "@storybook/react";
import Themeisle82 from "../Themeisle82";

const meta: Meta<typeof Themeisle82> = { title: "Themeisle/Themeisle82", component: Themeisle82 };

export default meta;
type Story = StoryObj<typeof Themeisle82>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
