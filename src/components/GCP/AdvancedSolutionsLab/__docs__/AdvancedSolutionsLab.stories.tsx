import type { Meta, StoryObj } from "@storybook/react";
import AdvancedSolutionsLab from "../AdvancedSolutionsLab";

const meta: Meta<typeof AdvancedSolutionsLab> = { title: "GCP/AdvancedSolutionsLab", component: AdvancedSolutionsLab };

export default meta;
type Story = StoryObj<typeof AdvancedSolutionsLab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
