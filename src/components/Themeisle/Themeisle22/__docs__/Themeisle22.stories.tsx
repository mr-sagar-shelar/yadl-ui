import type { Meta, StoryObj } from "@storybook/react";
import Themeisle22 from "../Themeisle22";

const meta: Meta<typeof Themeisle22> = { title: "Themeisle/Themeisle22", component: Themeisle22 };

export default meta;
type Story = StoryObj<typeof Themeisle22>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
