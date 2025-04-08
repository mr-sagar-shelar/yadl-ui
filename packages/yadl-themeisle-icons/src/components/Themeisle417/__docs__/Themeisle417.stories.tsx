import type { Meta, StoryObj } from "@storybook/react";
import Themeisle417 from "../Themeisle417";

const meta: Meta<typeof Themeisle417> = { title: "Themeisle/Themeisle417", component: Themeisle417 };

export default meta;
type Story = StoryObj<typeof Themeisle417>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
