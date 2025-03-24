import type { Meta, StoryObj } from "@storybook/react";
import Themeisle113 from "../Themeisle113";

const meta: Meta<typeof Themeisle113> = { title: "Themeisle/Themeisle113", component: Themeisle113 };

export default meta;
type Story = StoryObj<typeof Themeisle113>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
